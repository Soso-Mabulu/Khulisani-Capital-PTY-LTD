'use client';

import { siteChat } from '@/ai/flows/site-chat-flow';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Bot, Send, User, X } from 'lucide-react';
import React, { useRef, useState, useTransition } from 'react';
import ReactMarkdown from 'react-markdown';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useToast } from '@/hooks/use-toast';

interface Message {
  role: 'user' | 'model';
  content: string;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isPending, startTransition] = useTransition();
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    startTransition(async () => {
      try {
        const response = await siteChat({
          history: messages,
          message: input,
        });

        const modelMessage: Message = { role: 'model', content: response };
        setMessages((prev) => [...prev, modelMessage]);
        
        // Scroll to bottom
        setTimeout(() => {
            if(scrollAreaRef.current) {
                const viewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
                if (viewport) {
                    viewport.scrollTop = viewport.scrollHeight;
                }
            }
        }, 0);

      } catch (error) {
        toast({
          title: 'Error',
          description: 'Failed to get a response from the chatbot. Please try again.',
          variant: 'destructive',
        });
        // remove the user message if the call fails
        setMessages(prev => prev.slice(0, prev.length - 1));
      }
    });
  };

  return (
    <div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="default"
            size="icon"
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg"
          >
            <Bot className="h-7 w-7" />
            <span className="sr-only">Open Chatbot</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col p-0 w-full sm:w-[500px] sm:max-w-full">
          <SheetHeader className="p-4 border-b">
            <SheetTitle className="flex items-center gap-2">
              <Bot /> Kulisani AI Assistant
            </SheetTitle>
          </SheetHeader>
          <ScrollArea className="flex-1" ref={scrollAreaRef}>
            <div className="p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    'flex items-start gap-3',
                    message.role === 'user' ? 'justify-end' : ''
                  )}
                >
                  {message.role === 'model' && (
                    <Avatar className="h-8 w-8">
                       <AvatarImage src="/logo.jpg" alt="Kulisani AI" />
                       <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      'p-3 rounded-lg max-w-[80%]',
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    )}
                  >
                    <ReactMarkdown className="prose prose-sm dark:prose-invert">
                      {message.content}
                    </ReactMarkdown>
                  </div>
                   {message.role === 'user' && (
                    <Avatar className="h-8 w-8">
                       <AvatarImage />
                       <AvatarFallback><User className="h-5 w-5"/></AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
              {isPending && (
                <div className="flex items-start gap-3">
                  <Avatar className="h-8 w-8">
                     <AvatarImage src="/logo.jpg" alt="Kulisani AI" />
                     <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  <div className="p-3 rounded-lg bg-muted">
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 bg-foreground rounded-full animate-pulse delay-0"></span>
                        <span className="h-2 w-2 bg-foreground rounded-full animate-pulse delay-200"></span>
                        <span className="h-2 w-2 bg-foreground rounded-full animate-pulse delay-400"></span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
          <div className="p-4 border-t">
            <form onSubmit={handleSendMessage} className="flex items-center gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything about Kulisani..."
                disabled={isPending}
              />
              <Button type="submit" size="icon" disabled={isPending || !input.trim()}>
                <Send className="h-5 w-5" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
