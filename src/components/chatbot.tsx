'use client';

import { siteChat } from '@/ai/flows/site-chat-flow';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Bot, Send, User, Sparkles, MessageCircle, X, Minimize2 } from 'lucide-react';
import React, { useEffect, useRef, useState, useTransition } from 'react';
import ReactMarkdown from 'react-markdown';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useToast } from '@/hooks/use-toast';

interface Message {
  role: 'user' | 'model';
  content: string;
  timestamp?: Date;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      content: '👋 **Welcome to Kulisani Capital!** I\'m your dedicated AI financial advisor.\n\n💼 I can help you with:\n• Our comprehensive financial services\n• Tax advisory and compliance\n• Business valuations and due diligence\n• Scheduling consultations\n• Financial modeling questions\n\nHow can I assist you today?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isPending, startTransition] = useTransition();
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const quickQuestions = [
    "💼 What services do you offer?",
    "📅 How do I schedule a consultation?", 
    "💰 Tell me about tax advisory services",
    "🏢 What makes Kulisani Capital different?",
    "📊 Do you do business valuations?",
    "🎯 Who are your ideal clients?"
  ];

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
        if (viewport) {
            setTimeout(() => {
                viewport.scrollTop = viewport.scrollHeight;
            }, 100);
        }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (messageText: string = input) => {
    if (!messageText.trim()) return;

    const userMessage: Message = { 
      role: 'user', 
      content: messageText,
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    startTransition(async () => {
      try {
        const response = await siteChat({
          history: messages,
          message: messageText,
        });

        const modelMessage: Message = { 
          role: 'model', 
          content: response,
          timestamp: new Date()
        };
        setMessages((prev) => [...prev, modelMessage]);

      } catch (error) {
        console.error("Chatbot error:", error);
        toast({
          title: 'Connection Error',
          description: 'I couldn\'t process your request right now. Please try again in a moment.',
          variant: 'destructive',
        });
      }
    });
  };

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question);
  };

  const formatTime = (timestamp: Date) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            className="h-16 w-16 rounded-full shadow-brand-xl bg-brand-gradient-primary hover:shadow-brand-xl hover-brand-lift relative overflow-hidden group border-4 border-white/20"
            size="icon"
          >
            {/* Ripple effect background */}
            <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-brand-accent/30 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 delay-100"></div>
            <div className="relative z-10 flex items-center justify-center">
              <MessageCircle className="h-7 w-7 text-white group-hover:scale-110 transition-transform duration-300" />
              <Sparkles className="absolute -top-1 -right-1 h-5 w-5 text-brand-accent animate-pulse" />
            </div>
            <span className="sr-only">Open AI Financial Assistant</span>
          </Button>
        </SheetTrigger>
        
        <SheetContent className="flex flex-col p-0 w-full max-w-full sm:max-w-md lg:max-w-lg bg-white border-l-4 border-brand-primary shadow-2xl">
          {/* Header */}
          <SheetHeader className="p-6 border-b-2 border-brand-accent/10 bg-brand-gradient-primary text-white">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Avatar className="h-12 w-12 border-3 border-white/30 shadow-lg">
                  <AvatarImage src="/logo.jpg" alt="Kulisani AI" />
                  <AvatarFallback className="bg-brand-accent text-brand-primary font-bold text-lg">AI</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-3 border-white animate-pulse shadow-lg"></div>
              </div>
              <div className="flex-1">
                <SheetTitle className="text-white font-bold text-xl">Kulisani AI Assistant</SheetTitle>
                <p className="text-white/90 text-sm font-medium flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Online • Ready to help with your financial needs
                </p>
              </div>
            </div>
          </SheetHeader>

          {/* Messages */}
          <ScrollArea className="flex-1 bg-white" ref={scrollAreaRef}>
            <div className="p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    'flex items-end gap-3 animate-fade-in-up',
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  {message.role === 'model' && (
                    <Avatar className="h-8 w-8 flex-shrink-0">
                       <AvatarImage src="/logo.jpg" alt="Kulisani AI" />
                       <AvatarFallback className="bg-brand-gradient-accent text-brand-primary text-xs font-semibold">AI</AvatarFallback>
                    </Avatar>
                  )}
                  
                  <div className={cn(
                    'flex flex-col max-w-[80%]',
                    message.role === 'user' ? 'items-end' : 'items-start'
                  )}>
                    <div
                      className={cn(
                        'px-5 py-4 rounded-2xl shadow-brand relative max-w-full overflow-hidden',
                        message.role === 'user'
                          ? 'bg-brand-gradient-primary text-white rounded-br-md shadow-lg'
                          : 'bg-gradient-to-br from-white to-brand-purple-50/30 border-2 border-brand-accent/20 text-gray-800 rounded-bl-md shadow-xl'
                      )}
                    >
                      <ReactMarkdown className={cn(
                        "prose prose-sm max-w-full",
                        message.role === 'user' 
                          ? "prose-invert [&>p]:text-white [&>*]:text-white" 
                          : "text-gray-800 [&>p]:text-gray-800"
                      )}>
                        {message.content}
                      </ReactMarkdown>
                    </div>
                    {message.timestamp && (
                      <span className={cn(
                        "text-xs mt-1 px-2",
                        message.role === 'user' ? 'text-gray-500' : 'text-gray-400'
                      )}>
                        {formatTime(message.timestamp)}
                      </span>
                    )}
                  </div>
                  
                  {message.role === 'user' && (
                    <Avatar className="h-8 w-8 flex-shrink-0">
                       <AvatarFallback className="bg-brand-primary text-white"><User className="h-4 w-4"/></AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
              
              {/* Loading indicator */}
              {isPending && (
                <div className="flex items-end gap-3 animate-fade-in-up">
                  <Avatar className="h-8 w-8">
                     <AvatarImage src="/logo.jpg" alt="Kulisani AI" />
                     <AvatarFallback className="bg-brand-gradient-accent text-brand-primary text-xs font-semibold">AI</AvatarFallback>
                  </Avatar>
                  <div className="bg-gradient-to-br from-white to-brand-purple-50/30 border-2 border-brand-accent/20 px-5 py-4 rounded-2xl rounded-bl-md shadow-xl">
                    <div className="flex items-center gap-3">
                        <div className="flex gap-1">
                          <div className="w-2.5 h-2.5 bg-brand-primary rounded-full animate-bounce"></div>
                          <div className="w-2.5 h-2.5 bg-brand-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2.5 h-2.5 bg-brand-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                        <span className="text-sm text-brand-primary font-medium">AI is thinking...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Quick Questions */}
          {messages.length === 1 && !isPending && (
            <div className="px-6 py-4 border-t border-brand-accent/10 bg-gradient-to-r from-brand-purple-50 to-white">
              <p className="text-sm text-brand-primary mb-3 font-semibold flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Popular questions to get you started:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {quickQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickQuestion(question)}
                    className="text-xs h-auto py-3 px-4 bg-white border-brand-accent/30 text-brand-primary hover:bg-brand-primary hover:text-white hover:border-brand-primary hover:scale-105 transition-all duration-300 text-left justify-start font-medium rounded-xl shadow-sm"
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-6 border-t border-brand-accent/20 bg-gradient-to-r from-white to-brand-purple-50/30">
            <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="flex items-center gap-3">
              <div className="flex-1 relative">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything about our financial services..."
                  disabled={isPending}
                  className="pr-14 py-3 text-base border-2 border-brand-accent/30 focus:border-brand-primary focus:ring-brand-primary/20 rounded-2xl bg-white shadow-sm placeholder:text-gray-400"
                />
                <Button 
                  type="submit" 
                  size="icon" 
                  disabled={isPending || !input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 bg-brand-primary hover:bg-brand-purple-600 rounded-xl shadow-brand hover:scale-105 transition-all duration-300"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
            <div className="flex items-center justify-center mt-3 gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <p className="text-xs text-gray-500 text-center">Powered by Gemini AI • Responses may need verification</p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}