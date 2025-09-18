import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ArrowUpRight, ArrowDownLeft, Copy, Share, Receipt } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Mock transaction data (in a real app, this would come from an API)
const transactionData: Record<string, any> = {
  '1': {
    id: '1',
    type: 'sent',
    recipient: 'John Doe',
    recipientAccount: '****1234',
    amount: -250.00,
    date: '2024-01-15',
    time: '10:30 AM',
    category: 'Transfer',
    status: 'Completed',
    transactionId: 'TXN123456789',
    description: 'Money transfer to John Doe',
    fee: 0.00
  },
  '2': {
    id: '2',
    type: 'received',
    recipient: 'Sarah Wilson',
    recipientAccount: '****5678',
    amount: 1200.00,
    date: '2024-01-14',
    time: '02:15 PM',
    category: 'Salary',
    status: 'Completed',
    transactionId: 'TXN123456790',
    description: 'Monthly salary payment',
    fee: 0.00
  },
  '3': {
    id: '3',
    type: 'sent',
    recipient: 'Amazon',
    recipientAccount: '****9012',
    amount: -89.99,
    date: '2024-01-13',
    time: '08:45 AM',
    category: 'Shopping',
    status: 'Completed',
    transactionId: 'TXN123456791',
    description: 'Online purchase',
    fee: 2.50
  },
  '4': {
    id: '4',
    type: 'received',
    recipient: 'Freelance Payment',
    recipientAccount: '****3456',
    amount: 450.00,
    date: '2024-01-12',
    time: '04:20 PM',
    category: 'Income',
    status: 'Completed',
    transactionId: 'TXN123456792',
    description: 'Freelance project payment',
    fee: 0.00
  }
};

const TransactionDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const transaction = id ? transactionData[id] : null;

  const handleCopyTransactionId = () => {
    if (transaction?.transactionId) {
      navigator.clipboard.writeText(transaction.transactionId);
      toast({
        title: "Copied!",
        description: "Transaction ID copied to clipboard",
      });
    }
  };

  const handleShare = () => {
    toast({
      title: "Share Feature",
      description: "Share functionality would be implemented here",
    });
  };

  const handleDownloadReceipt = () => {
    toast({
      title: "Download Receipt",
      description: "Receipt download would be implemented here",
    });
  };

  if (!transaction) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Transaction Not Found</h2>
          <p className="text-muted-foreground mb-4">The requested transaction could not be found.</p>
          <Button onClick={() => navigate('/dashboard')} variant="default">
            Back to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-background">
      {/* Header */}
      <div className="gradient-primary px-6 pt-12 pb-8 rounded-b-3xl">
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate('/dashboard')}
            className="text-white hover:bg-white/20"
          >
            <ArrowLeft />
          </Button>
          <h1 className="text-white text-lg font-semibold">Transaction Details</h1>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={handleShare}
            className="text-white hover:bg-white/20"
          >
            <Share />
          </Button>
        </div>

        {/* Transaction Status Card */}
        <Card className="gradient-card border-0 shadow-lg">
          <div className="p-6 text-center">
            <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
              transaction.type === 'received' 
                ? 'bg-success/10 text-success' 
                : 'bg-primary/10 text-primary'
            }`}>
              {transaction.type === 'received' ? 
                <ArrowDownLeft size={32} /> : 
                <ArrowUpRight size={32} />
              }
            </div>
            <p className="text-2xl font-bold text-foreground mb-2">
              {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
            </p>
            <p className="text-muted-foreground">
              {transaction.type === 'received' ? 'Received from' : 'Sent to'} {transaction.recipient}
            </p>
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mt-3 bg-success/10 text-success`}>
              {transaction.status}
            </div>
          </div>
        </Card>
      </div>

      {/* Transaction Details */}
      <div className="px-6 -mt-4 pb-8">
        <Card className="banking-card">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Transaction ID</span>
              <div className="flex items-center space-x-2">
                <span className="font-mono text-sm">{transaction.transactionId}</span>
                <Button 
                  variant="ghost" 
                  size="icon-sm"
                  onClick={handleCopyTransactionId}
                >
                  <Copy size={14} />
                </Button>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Date & Time</span>
              <span className="font-medium">{transaction.date} at {transaction.time}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Account</span>
              <span className="font-medium">{transaction.recipientAccount}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Category</span>
              <span className="font-medium">{transaction.category}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Description</span>
              <span className="font-medium text-right max-w-[200px]">{transaction.description}</span>
            </div>

            {transaction.fee > 0 && (
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Transaction Fee</span>
                <span className="font-medium">${transaction.fee.toFixed(2)}</span>
              </div>
            )}

            <hr className="border-border" />

            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total Amount</span>
              <span className={transaction.amount > 0 ? 'text-success' : 'text-foreground'}>
                {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
              </span>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="mt-6 space-y-3">
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full"
            onClick={handleDownloadReceipt}
          >
            <Receipt className="mr-2" size={18} />
            Download Receipt
          </Button>
          
          {transaction.type === 'sent' && (
            <Button 
              variant="secondary" 
              size="lg" 
              className="w-full"
              onClick={() => toast({ title: "Repeat Transaction", description: "Feature coming soon!" })}
            >
              Repeat Transaction
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;