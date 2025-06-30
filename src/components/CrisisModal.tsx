import React from 'react';
import { X, Phone, MessageCircle, Heart, ExternalLink } from 'lucide-react';

interface CrisisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CrisisModal({ isOpen, onClose }: CrisisModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-xl font-semibold text-slate-800">Crisis Support Resources</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors duration-200"
            >
              <X className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <h3 className="font-semibold text-red-800 mb-2">If you're in immediate danger:</h3>
            <p className="text-red-700 mb-3">Call 911 or go to your nearest emergency room right away.</p>
          </div>

          <div className="grid gap-4">
            <div className="bg-slate-50 rounded-xl p-4">
              <div className="flex items-center space-x-3 mb-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-slate-800">988 Suicide & Crisis Lifeline</h3>
              </div>
              <p className="text-slate-600 mb-3">
                Free, confidential emotional support 24/7 for people in suicidal crisis or emotional distress.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:988"
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call 988</span>
                </a>
                <a
                  href="sms:988"
                  className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Text 988</span>
                </a>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-4">
              <div className="flex items-center space-x-3 mb-3">
                <MessageCircle className="w-5 h-5 text-green-600" />
                <h3 className="font-semibold text-slate-800">Crisis Text Line</h3>
              </div>
              <p className="text-slate-600 mb-3">
                Text with a trained crisis counselor who can provide support and information.
              </p>
              <a
                href="sms:741741?body=HELLO"
                className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 w-fit"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Text HOME to 741741</span>
              </a>
            </div>

            <div className="bg-slate-50 rounded-xl p-4">
              <h3 className="font-semibold text-slate-800 mb-3">Additional Resources</h3>
              <div className="space-y-3">
                <a
                  href="https://suicidepreventionlifeline.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-slate-50 transition-colors duration-200 border border-slate-200"
                >
                  <span className="text-slate-700">National Suicide Prevention Lifeline</span>
                  <ExternalLink className="w-4 h-4 text-slate-500" />
                </a>
                <a
                  href="https://www.nami.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-slate-50 transition-colors duration-200 border border-slate-200"
                >
                  <span className="text-slate-700">National Alliance on Mental Illness</span>
                  <ExternalLink className="w-4 h-4 text-slate-500" />
                </a>
                <a
                  href="https://www.mentalhealth.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-slate-50 transition-colors duration-200 border border-slate-200"
                >
                  <span className="text-slate-700">MentalHealth.gov</span>
                  <ExternalLink className="w-4 h-4 text-slate-500" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h3 className="font-semibold text-blue-800 mb-2">Remember:</h3>
            <ul className="text-blue-700 space-y-1 text-sm">
              <li>• You are not alone in this</li>
              <li>• Your life has value and meaning</li>
              <li>• Crisis feelings are temporary</li>
              <li>• Help is available 24/7</li>
              <li>• It's okay to ask for professional support</li>
            </ul>
          </div>
        </div>

        <div className="p-6 border-t border-slate-200 bg-slate-50 rounded-b-2xl">
          <p className="text-sm text-slate-600 text-center">
            While I'm here to provide emotional support, these resources connect you with trained professionals 
            who specialize in crisis intervention and mental health support.
          </p>
        </div>
      </div>
    </div>
  );
}