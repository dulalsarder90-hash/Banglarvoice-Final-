import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Newspaper, 
  TrendingUp, 
  Volume2, 
  FileText, 
  Smartphone, 
  ChevronRight,
  Wifi,
  Radio
} from "lucide-react";
import Link from 'next/link';

export default function Home() {
  const categories = ["জাতীয়", "খেলাধুলা", "প্রযুক্তি", "বিশ্ব", "বিনোদন", "অর্থনীতি"];
  
  const breakingNews = [
    {
      id: 1,
      title: "বিশ্বকাপ ফুটবলের প্রস্তুতিতে বাংলাদেশ: এআই প্রযুক্তির ব্যবহার শুরু",
      category: "খেলাধুলা",
      time: "২ মিনিট আগে",
      image: "https://picsum.photos/seed/football/800/500"
    },
    {
      id: 2,
      title: "নতুন প্রযুক্তির বিপ্লব: বাংলার ঘরে ঘরে এখন উচ্চগতির ইন্টারনেট",
      category: "প্রযুক্তি",
      time: "১০ মিনিট আগে",
      image: "https://picsum.photos/seed/tech/800/500"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center gap-3">
              <div className="bg-[#5E41A4] p-2 rounded-lg">
                <Radio className="text-white w-6 h-6 animate-pulse" />
              </div>
              <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-[#5E41A4]">
                বাংলার <span className="text-[#1B2EA3]">ভয়েস</span>
              </h1>
            </div>
            
            <nav className="hidden lg:flex items-center gap-8">
              {categories.map(cat => (
                <Link key={cat} href="#" className="font-bengali text-lg hover:text-[#5E41A4] transition-colors">{cat}</Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Badge variant="outline" className="hidden sm:flex border-[#5E41A4] text-[#5E41A4] font-medium">
                <Wifi className="w-3 h-3 mr-1" /> লাইভ আপডেট
              </Badge>
              <Button size="sm" className="bg-[#5E41A4] hover:bg-[#4a3382] rounded-full hidden md:flex">
                E-Paper
              </Button>
              <Link href="/control-room" className="p-2 hover:bg-gray-100 rounded-full">
                <Smartphone className="w-5 h-5 text-gray-600" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Breaking Ticker */}
      <div className="bg-[#1B2EA3] text-white py-2 overflow-hidden whitespace-nowrap">
        <div className="container mx-auto px-4 flex items-center">
          <Badge className="bg-white text-[#1B2EA3] mr-4 font-bold rounded-none shrink-0">ব্রেকিং নিউজ</Badge>
          <div className="animate-marquee font-bengali text-lg">
            বিশ্বকাপ ফুটবলের নতুন সূচী প্রকাশ... বাংলাদেশের নতুন এআই পলিসি অনুমোদিত... ডিজিটাল মুদ্রার নতুন দিগন্ত... 
          </div>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-8 space-y-12">
            {/* Hero Section */}
            <section className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl">
              <div className="aspect-video relative">
                <Image 
                  src={breakingNews[0].image} 
                  alt="Hero News" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  data-ai-hint="football sports"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 p-6 md:p-10 text-white">
                <Badge className="bg-[#1B2EA3] mb-4 text-sm font-bengali">{breakingNews[0].category}</Badge>
                <h2 className="text-2xl md:text-5xl font-bold font-bengali leading-tight tracking-tight mb-4 group-hover:underline underline-offset-4">
                  {breakingNews[0].title}
                </h2>
                <div className="flex items-center gap-4 text-gray-300 text-sm">
                  <span className="flex items-center gap-1"><Volume2 className="w-4 h-4" /> অডিও শুনুন</span>
                  <Separator orientation="vertical" className="h-4 bg-gray-600" />
                  <span>{breakingNews[0].time}</span>
                </div>
              </div>
            </section>

            {/* Grid Sub-news */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map(item => (
                <div key={item} className="flex gap-4 group cursor-pointer">
                  <div className="w-1/3 aspect-square relative shrink-0 overflow-hidden rounded-lg">
                    <Image 
                      src={`https://picsum.photos/seed/news${item + 5}/400/400`} 
                      alt="News Thumb" 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform"
                      data-ai-hint="news technology"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <Badge variant="outline" className="w-fit mb-2 text-xs text-[#5E41A4] border-[#5E41A4]">জাতীয়</Badge>
                    <h3 className="font-bengali font-bold text-lg leading-snug group-hover:text-[#5E41A4] transition-colors">
                      নতুন ই-পাসপোর্ট সেবায় বিশেষ সুবিধা ঘোষণা করল সরকার
                    </h3>
                    <p className="text-xs text-muted-foreground mt-2">৫ মিনিট আগে</p>
                  </div>
                </div>
              ))}
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <Card className="border-none bg-[#FAF9FC] shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-xl font-bold text-[#5E41A4]">
                  <TrendingUp className="w-5 h-5" /> জনপ্রিয় সংবাদ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="flex gap-4 border-b border-gray-100 pb-4 last:border-0 last:pb-0 group cursor-pointer">
                    <span className="text-3xl font-black text-gray-200 group-hover:text-[#1B2EA3] transition-colors">0{i}</span>
                    <p className="font-bengali font-semibold text-base group-hover:underline">
                      ঢাকার মেট্রোরেলে নতুন প্রযুক্তি যুক্ত হচ্ছে, কমবে যাত্রীদের ভিড়
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-[#5E41A4] text-white border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-8 h-8 opacity-80" />
                  <h3 className="text-xl font-bold">আজকের ই-পেপার</h3>
                </div>
                <p className="text-sm opacity-90 mb-6 font-bengali">
                  সারাদিনের গুরুত্বপূর্ণ সংবাদের সংকলন এখন একটি ১০ পৃষ্ঠার পিডিএফে। ডাউনলোড করুন ফ্রিতে।
                </p>
                <Button className="w-full bg-white text-[#5E41A4] hover:bg-gray-100 font-bold">
                  ডাউনলোড করুন (PDF)
                </Button>
              </CardContent>
            </Card>

            <div className="bg-white p-6 rounded-2xl border-2 border-dashed border-gray-200">
              <h4 className="font-bold flex items-center gap-2 mb-4">
                <Newspaper className="w-4 h-4" /> AI রিডার মোড
              </h4>
              <p className="text-sm text-muted-foreground font-bengali leading-relaxed">
                আমাদের উন্নত এআই প্রযুক্তি স্বয়ংক্রিয়ভাবে খবরের সত্যতা যাচাই করে এবং কপিরাইট মুক্ত আধুনিক বাংলা ভাষায় তা আপনার কাছে পৌঁছে দেয়।
              </p>
            </div>
          </aside>
        </div>
      </main>

      <footer className="bg-gray-50 border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-2xl font-black text-[#5E41A4] mb-4">বাংলার ভয়েস</h2>
              <p className="text-sm text-muted-foreground max-w-md font-bengali">
                আমরা আধুনিক এআই প্রযুক্তির মাধ্যমে ২৪/৭ স্বয়ংক্রিয় সংবাদ পরিবেশন করি। কোনো কাল্পনিক বা অসত্য তথ্য আমাদের সিস্টেমে প্রবেশ করতে পারে না।
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">বিভাগ</h4>
              <ul className="text-sm space-y-2 text-muted-foreground font-bengali">
                <li><Link href="#" className="hover:text-[#5E41A4]">জাতীয়</Link></li>
                <li><Link href="#" className="hover:text-[#5E41A4]">খেলাধুলা</Link></li>
                <li><Link href="#" className="hover:text-[#5E41A4]">প্রযুক্তি</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">যোগাযোগ</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">টেলিগ্রাম: @BanglarVoiceBot</li>
                <li className="flex items-center gap-2">ইমেইল: info@banglarvoice.com</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Banglar Voice Autonomous Media Platform. All rights reserved. Built with Advanced AI.
          </div>
        </div>
      </footer>
    </div>
  );
}
