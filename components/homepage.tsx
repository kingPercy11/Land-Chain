'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, MessageSquare, FileCheck, Users, Scale, UserCircle2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from 'next/image';
import Image1 from './src/img/profile.png';
import Image2 from './src/img/register.png';
import Image3 from './src/img/buy.png';
import Image4 from './src/img/sell.png';
import Image5 from './src/img/verify.png';
import Image6 from './src/img/price.png';
import Link from 'next/link';

export function Homepage() {
  const [chatbotOpen, setChatbotOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    { role: 'system', content: 'Hello! I\'m the LandChain AI assistant. How can I help you today?' }
  ])

  const landchainFunctions = [
    { name: 'Profile', icon: UserCircle2, image: Image1, color: 'from-blue-400 to-blue-600' },
    { name: 'Register Land', icon: FileCheck, image: Image2, color: 'from-indigo-400 to-indigo-600', link: './register-land' },
    { name: 'Buy Land', icon: Users, image: Image3, color: 'from-purple-400 to-purple-600' },
    { name: 'Sell Land', icon: Scale, image: Image4, color: 'from-green-400 to-green-600', link: './sell-land' },
    { name: 'Document Verification', icon: FileCheck, image:Image5, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Price Predictions', icon: TrendingUp, image: Image6, color: 'from-red-400 to-red-600' }
  ]

  const faqItems = [
    { question: 'How does LandChain prevent fraud?', answer: 'LandChain uses blockchain technology to create immutable records of land ownership. This means once a transaction is recorded, it cannot be altered or deleted, making it extremely difficult for anyone to commit fraud.' },
    { question: 'Can LandChain help resolve existing disputes?', answer: 'Yes, LandChain provides a transparent and verifiable history of land ownership. This can be used as evidence in existing disputes, potentially speeding up resolution processes.' },
    { question: 'How accurate are the price predictions?', answer: 'Our AI models use historical data and current market trends to provide price predictions. While no prediction is 100% accurate, our models are continuously improving and provide valuable insights for decision-making.' }
  ]

  const handleChatSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const userMessage = formData.get('userMessage') as string
    if (userMessage.trim()) {
      setChatMessages(prev => [...prev, { role: 'user', content: userMessage }])
      // Simulate AI response (replace with actual AI integration)
      setTimeout(() => {
        setChatMessages(prev => [...prev, { role: 'system', content: 'I understand your question about "' + userMessage + '". LandChain uses blockchain technology to securely record land ownership. This helps prevent fraud and makes transactions more transparent. Is there anything specific you\'d like to know about this process?' }])
      }, 1000)
      e.currentTarget.reset()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600 mr-8">LandChain</span>
              <Button variant="ghost">AI Assistant</Button>
            </div>
            <div className="flex items-center">
              <Button variant="ghost">About</Button>
              <Button variant="ghost">Contact</Button>
              <Button variant="ghost" className="ml-4">
                <UserCircle2 className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Secure Land Ownership with <span className="text-blue-600">Blockchain</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            LandChain revolutionizes land ownership management using AI, Machine Learning, and blockchain technology.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <Button size="lg">Learn More</Button>
            <Button variant="outline" size="lg" className="mt-3 sm:mt-0 sm:ml-3">
              Watch Demo
            </Button>
          </div>
        </section>

        {/* LandChain Functions Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-10">
            LandChain Functions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {landchainFunctions.map((func, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`bg-gradient-to-br ${func.color} rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out`}
            >
              <Link href={func.link || '/register-lamd'}>
                <Card className="h-full bg-transparent border-0 cursor-pointer">
                  <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                    <Image
                      src={func.image}
                      alt={func.name}
                      width={100}
                      height={100}
                      className="mb-4"
                    />
                    <CardTitle className="text-white text-center">{func.name}</CardTitle>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-10">
            How LandChain Works
          </h2>
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-between">
              {['Register Land', 'Verify Ownership', 'Transfer Property', 'Update Blockchain'].map((step, index) => (
                <div key={index} className="bg-white px-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold"
                  >
                    {index + 1}
                  </motion.div>
                  <div className="mt-2 text-center">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-10">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible>
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>

      {/* AI Chatbot */}
      <div className="fixed bottom-4 right-4">
        <Button
          onClick={() => setChatbotOpen(!chatbotOpen)}
          size="icon"
          className="rounded-full h-16 w-16"
        >
          <MessageSquare className="h-8 w-8" />
        </Button>
        {chatbotOpen && (
          <Card className="absolute bottom-20 right-0 w-96">
            <CardHeader>
              <CardTitle>LandChain AI Assistant</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 overflow-y-auto mb-4">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                    <span className={`inline-block p-2 rounded-lg ${msg.role === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                      {msg.content}
                    </span>
                  </div>
                ))}
              </div>
              <form onSubmit={handleChatSubmit}>
                <div className="flex">
                  <input
                    type="text"
                    name="userMessage"
                    placeholder="Ask a question..."
                    className="flex-grow mr-2 p-2 border rounded"
                  />
                  <Button type="submit">Send</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}