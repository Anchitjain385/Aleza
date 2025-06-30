import React from 'react';
import { Heart, MessageCircle, Shield, Sparkles } from 'lucide-react';

interface WelcomeProps {
  onStartChat: () => void;
}

export default function Welcome({ onStartChat }: WelcomeProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Hello, I'm Aleza
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm here to listen, understand, and support you through whatever you're experiencing. 
            This is a safe space where your feelings are valid and your voice matters.
          </p>
          
          <button
            onClick={onStartChat}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Start Our Conversation
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-3">Safe & Confidential</h3>
            <p className="text-slate-600 leading-relaxed">
              Your conversations are private and secure. This is your judgment-free zone to express yourself freely.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-3">Active Listening</h3>
            <p className="text-slate-600 leading-relaxed">
              I listen deeply and reflect back your feelings with empathy, helping you feel truly heard and understood.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-3">Personal Growth</h3>
            <p className="text-slate-600 leading-relaxed">
              Together, we'll explore your emotions and develop healthy coping strategies for your unique journey.
            </p>
          </div>
        </div>

        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-200">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6 text-center">What You Can Expect</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                <p className="text-slate-700">Compassionate, non-judgmental support</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                <p className="text-slate-700">Thoughtful questions that promote self-reflection</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                <p className="text-slate-700">Gentle guidance for emotional challenges</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                <p className="text-slate-700">Validation of your feelings and experiences</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                <p className="text-slate-700">Coping strategies tailored to your needs</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                <p className="text-slate-700">A safe space to process complex emotions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}