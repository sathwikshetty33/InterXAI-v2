import React from 'react';
import { Loader2, Mail } from 'lucide-react';

const EmailVerification = ({ 
  email, 
  verificationCode, 
  setVerificationCode, 
  handleVerifyEmail, 
  handleResendCode, 
  setVerificationMode, 
  isLoading 
}) => {
  return (
    <div className="bg-slate-800/40 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-slate-700/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent animate-shimmer"></div>

      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl mb-4 transform hover:scale-110 transition-transform duration-300">
          <Mail className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
          Verify Your Email
        </h2>
        <p className="text-slate-400 mt-2">Enter the code sent to {email}</p>
      </div>

      <div className="space-y-4">
        <div className="relative group">
          <input
            type="text"
            placeholder="Enter verification code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-slate-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 placeholder-slate-400 text-center text-lg font-mono"
            required
          />
        </div>
        <button
          onClick={handleVerifyEmail}
          disabled={isLoading}
          className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:from-purple-700 hover:to-blue-700 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-white shadow-lg"
        >
          {isLoading ? (
            <div className="flex items-center justify-center space-x-2">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Verifying...</span>
            </div>
          ) : (
            'Verify Email'
          )}
        </button>
        <button
          onClick={handleResendCode}
          disabled={isLoading}
          className="w-full py-2 text-purple-400 hover:text-purple-300 transition-colors text-sm"
        >
          Resend Code
        </button>
        <button
          onClick={() => setVerificationMode(false)}
          className="w-full py-2 text-slate-400 hover:text-slate-300 transition-colors text-sm"
        >
          Back to Sign Up
        </button>
      </div>
    </div>
  );
};

export default EmailVerification;