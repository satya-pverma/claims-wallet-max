// pages/ClaimsWalletMax.tsx
'use client'

import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import {
  Shield,
  Clock,
  Globe,
  CreditCard,
  Landmark,
  MailCheck,
  Building2,
} from 'lucide-react';

// import { ChatBubble } from '../components/ChatBubble';
// import { HelpSidebarBase } from '../components/HelpSidebarBase';
// import { claimsWalletPlusHelp } from '../data/pageHelpContent';
// import { PageHelpButton } from '../components/PageHelpButton';
// import { ClaimsWalletCardPlus } from '../components/ClaimsWalletCardPlus';
import { HeroSection } from '../components/ClaimsWallet/HeroSection';
import { SecondaryPaymentOptions } from '../components/ClaimsWallet/SecondaryPaymentOptions';
import { RecentTransactions } from '../components/ClaimsWallet/RecentTransactions';
import { AdditionalFeatures } from '../components/ClaimsWallet/AdditionalFeatures';
import { OTPVerificationModal } from '../components/ClaimsWallet/OTPVerificationModal';
import { PaymentTransferModal } from '../components/ClaimsWallet/PaymentTransferModal';
import { useModal } from '../hooks/useModal';
import { Header } from '../components/Header/Header';
import { ClaimsWalletCardPlus } from '../components/claimsWalletPlusHelp/ClaimsWalletCardPlus';


export default function ClaimsWalletMax() {
  const { t } = useTranslation();
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [modalPaymentMethod, setModalPaymentMethod] = useState('');
  
  const otpModal = useModal();
  const transferModal = useModal();
  const [showCardDetails, setShowCardDetails] = useState(false);

  // Wallet data
  const walletData = {
    balance: 4750.0,
  };

  // Payment method configurations
  const paymentMethods = [
    {
      id: 'virtual-card',
      name: 'Virtual Card',
      description: 'Instant access to funds with Mastercard',
      icon: CreditCard,
      timeframe: 'Instant',
      priority: 1,
      color: 'from-blue-600 to-indigo-600',
    },
    {
      id: 'direct-card',
      name: 'Direct to Visa/Mastercard',
      description: 'Send money to your existing credit or debit card',
      icon: CreditCard,
      timeframe: '10-30 minutes',
      priority: 2,
      color: 'from-green-600 to-emerald-600',
    },
    {
      id: 'ach',
      name: 'ACH to Bank',
      description: 'Transfer directly to your bank account',
      icon: Landmark,
      timeframe: '1-3 business days',
      priority: 3,
      color: 'from-purple-600 to-violet-600',
    },
    {
      id: 'check',
      name: 'eCheck',
      description: 'Traditional check sent to your mailing address',
      icon: MailCheck,
      timeframe: '5-7 business days',
      priority: 4,
      color: 'from-amber-600 to-orange-600',
    },
  ];

  // Transaction data
  const transactions = [
    {
      date: '2024-03-15',
      description: 'Home Depot Purchase',
      amount: 250.0,
      status: 'completed' as const,
      method: 'Virtual Card',
    },
    {
      date: '2024-03-14',
      description: 'Lowes Hardware',
      amount: 175.5,
      status: 'completed' as const,
      method: 'Virtual Card',
    },
    {
      date: '2024-03-13',
      description: 'Claim Payment',
      amount: 5000.0,
      status: 'completed' as const,
      method: 'Deposit',
    },
  ];

  // Features data
  const features = [
    {
      icon: Shield,
      title: 'Secure Access',
      description: 'Bank-grade security protecting your virtual card details',
    },
    {
      icon: Globe,
      title: 'Global Acceptance',
      description: 'Use your virtual card anywhere Mastercard is accepted',
    },
    {
      icon: Clock,
      title: 'Real-time Updates',
      description: 'Track transactions and balance updates instantly',
    },
  ];

  const handleSelectPaymentMethod = (methodId: string) => {
    const method = paymentMethods.find((m) => m.id === methodId);
    if (method) {
      setModalPaymentMethod(method.name);
      transferModal.open();
    }
  };

  const handleRefreshWallet = () => {
    transferModal.open();
  };

  const handleOTPSuccess = () => {
    setShowCardDetails(true);
    otpModal.close();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9FF] dark:bg-gray-950">
      <Header />

      {/* <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <HeroSection />

          
          <div className="max-w-5xl mx-auto mb-10">
            <ClaimsWalletCardPlus balance={walletData.balance} onRefresh={handleRefreshWallet} />
          </div>

          
          <SecondaryPaymentOptions
            paymentMethods={paymentMethods}
            onSelectMethod={handleSelectPaymentMethod}
          />

       
          <RecentTransactions transactions={transactions} />

      
          <AdditionalFeatures features={features} />
        </div>
      </main> */}

      {/* Fixed position help button */}
      <div className="fixed top-20 right-4 z-40">
        {/* <PageHelpButton onClick={() => setIsHelpOpen(!isHelpOpen)} isOpen={isHelpOpen} /> */}
      </div>

      {/* Page-specific help sidebar */}
      {/* <HelpSidebarBase
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
        content={claimsWalletPlusHelp}
      />

      <ChatBubble /> */}

      {/* Modals */}
      <OTPVerificationModal
        isOpen={otpModal.isOpen}
        onClose={otpModal.close}
        onSuccess={handleOTPSuccess}
      />

      <PaymentTransferModal
        isOpen={transferModal.isOpen}
        onClose={transferModal.close}
        paymentMethod={modalPaymentMethod}
        balance={walletData.balance}
      />
    </div>
  );
}