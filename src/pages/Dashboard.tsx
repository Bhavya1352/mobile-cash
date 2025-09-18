import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowUpRight, ArrowDownLeft, CreditCard, MoreVertical, Eye, EyeOff } from 'lucide-react';
import userAvatar from '@/assets/user-avatar.png';

// Mock transaction data
const transactions = [
  {
    id: '1',
    type: 'sent',
    recipient: 'John Doe',
    amount: -250.00,
    date: '2024-01-15',
    time: '10:30 AM',
    category: 'Transfer'
  },
  {
    id: '2',
    type: 'received',
    recipient: 'Sarah Wilson',
    amount: 1200.00,
    date: '2024-01-14',
    time: '02:15 PM',
    category: 'Salary'
  },
  {
    id: '3',
    type: 'sent',
    recipient: 'Amazon',
    amount: -89.99,
    date: '2024-01-13',
    time: '08:45 AM',
    category: 'Shopping'
  },
  {
    id: '4',
    type: 'received',
    recipient: 'Freelance Payment',
    amount: 450.00,
    date: '2024-01-12',
    time: '04:20 PM',
    category: 'Income'
  }
];

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [showBalance, setShowBalance] = React.useState(true);
  const balance = 3847.52;

  const handleTransactionClick = (transactionId: string) => {
    navigate(`/transaction/${transactionId}`);
  };

  return (
    <div className="h-full bg-background">
      {/* Header Section with Gradient */}
      <div className="gradient-primary px-6 pt-12 pb-8 rounded-b-3xl">
        {/* User Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <img 
              src={userAvatar} 
              alt="User Profile" 
              className="w-12 h-12 rounded-full border-2 border-white/20"
            />
            <div>
              <p className="text-white/80 text-sm">Good morning</p>
              <h2 className="text-white text-xl font-semibold">Alex Johnson</h2>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <MoreVertical />
          </Button>
        </div>

        {/* Balance Card */}
        <Card className="gradient-card border-0 shadow-lg">
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-muted-foreground text-sm">Current Balance</p>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => setShowBalance(!showBalance)}
                className="text-muted-foreground hover:text-foreground"
              >
                {showBalance ? <Eye size={16} /> : <EyeOff size={16} />}
              </Button>
            </div>
            <p className="text-3xl font-bold text-foreground">
              {showBalance ? `${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '••••••'}
            </p>
            <p className="text-success text-sm mt-1">+12.5% from last month</p>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="px-6 -mt-4 mb-6">
        <div className="grid grid-cols-3 gap-4">
          <Button variant="outline" className="flex-col h-20 space-y-2" size="lg">
            <ArrowUpRight size={24} />
            <span className="text-xs">Send</span>
          </Button>
          <Button variant="outline" className="flex-col h-20 space-y-2" size="lg">
            <ArrowDownLeft size={24} />
            <span className="text-xs">Receive</span>
          </Button>
          <Button variant="outline" className="flex-col h-20 space-y-2" size="lg">
            <CreditCard size={24} />
            <span className="text-xs">Pay</span>
          </Button>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="px-6 pb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Recent Transactions</h3>
          <Button variant="ghost" className="text-primary text-sm">
            View All
          </Button>
        </div>

        <div className="space-y-3">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              onClick={() => handleTransactionClick(transaction.id)}
              className="transaction-item cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    transaction.type === 'received' 
                      ? 'bg-success/10 text-success' 
                      : 'bg-destructive/10 text-destructive'
                  }`}>
                    {transaction.type === 'received' ? 
                      <ArrowDownLeft size={18} /> : 
                      <ArrowUpRight size={18} />
                    }
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{transaction.recipient}</p>
                    <p className="text-sm text-muted-foreground">{transaction.date} • {transaction.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${
                    transaction.amount > 0 ? 'text-success' : 'text-foreground'
                  }`}>
                    {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                  </p>
                  <p className="text-xs text-muted-foreground">{transaction.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;