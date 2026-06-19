"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Activity, 
  Cpu, 
  Database, 
  Globe, 
  MessageSquare, 
  Zap, 
  RefreshCcw, 
  CheckCircle2,
  AlertCircle,
  BarChart3,
  Newspaper
} from "lucide-react";
import { Button } from '@/components/ui/button';

export default function ControlRoom() {
  const [stats, setStats] = useState({
    cpu: 0,
    memory: 0,
    dbConnections: 0,
    uptime: "0:00:00",
    articlesPublished: 0,
    activeTasks: 0
  });

  const [logs, setLogs] = useState<{id: number, time: string, msg: string, type: 'info' | 'warn' | 'success'}[]>([]);

  useEffect(() => {
    // Simulate real-time monitoring
    const interval = setInterval(() => {
      setStats({
        cpu: Math.floor(Math.random() * 30) + 10,
        memory: Math.floor(Math.random() * 20) + 40,
        dbConnections: 12,
        uptime: "4d 12h 45m",
        articlesPublished: 142,
        activeTasks: 3
      });
      
      if (Math.random() > 0.8) {
        setLogs(prev => [
          {
            id: Date.now(),
            time: new Date().toLocaleTimeString(),
            msg: `AI processed news article: "World Cup 2026 update"`,
            type: 'success'
          },
          ...prev.slice(0, 9)
        ]);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9FC] p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="flex justify-between items-end border-b pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="text-[#5E41A4] border-[#5E41A4] animate-pulse-slow">
                <Activity className="w-3 h-3 mr-1" /> LIVE SYSTEM
              </Badge>
              <Badge variant="secondary" className="bg-[#1B2EA3] text-white">v1.0.0-PROD</Badge>
            </div>
            <h1 className="text-4xl font-bold text-[#5E41A4]">Command & Control Center</h1>
            <p className="text-muted-foreground mt-1">Banglar Voice Autonomous Media Platform</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" className="gap-2">
              <RefreshCcw className="w-4 h-4" /> REBOOT NODES
            </Button>
            <Button className="bg-[#5E41A4] hover:bg-[#4a3382] gap-2">
              <Zap className="w-4 h-4" /> FORCE SYNC
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-none shadow-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-purple-50 rounded-lg">
                  <Cpu className="w-6 h-6 text-[#5E41A4]" />
                </div>
                <span className="text-2xl font-bold">{stats.cpu}%</span>
              </div>
              <h3 className="font-semibold text-sm text-muted-foreground">CPU Load</h3>
              <Progress value={stats.cpu} className="h-2 mt-4" />
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Database className="w-6 h-6 text-[#1B2EA3]" />
                </div>
                <span className="text-2xl font-bold">{stats.memory}%</span>
              </div>
              <h3 className="font-semibold text-sm text-muted-foreground">Memory Usage</h3>
              <Progress value={stats.memory} className="h-2 mt-4" />
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-green-50 rounded-lg">
                  <Newspaper className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-2xl font-bold">{stats.articlesPublished}</span>
              </div>
              <h3 className="font-semibold text-sm text-muted-foreground">Published Today</h3>
              <div className="flex items-center gap-2 mt-4 text-xs text-green-600 font-medium">
                <CheckCircle2 className="w-3 h-3" /> Target reached (120+)
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-orange-50 rounded-lg">
                  <Globe className="w-6 h-6 text-orange-600" />
                </div>
                <span className="text-2xl font-bold">{stats.uptime}</span>
              </div>
              <h3 className="font-semibold text-sm text-muted-foreground">System Uptime</h3>
              <div className="flex items-center gap-2 mt-4 text-xs text-orange-600 font-medium">
                <AlertCircle className="w-3 h-3" /> Continuous Operation
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Autonomous Pipeline Activity</CardTitle>
                <CardDescription>Live processing of news from global sources</CardDescription>
              </div>
              <BarChart3 className="w-5 h-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {logs.length === 0 && <p className="text-center py-10 text-muted-foreground italic">Waiting for incoming signals...</p>}
                {logs.map(log => (
                  <div key={log.id} className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 border border-gray-100">
                    <span className="text-xs font-mono text-muted-foreground">{log.time}</span>
                    <div className={`w-2 h-2 rounded-full ${log.type === 'success' ? 'bg-green-500' : 'bg-blue-500'}`} />
                    <p className="text-sm font-medium">{log.msg}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle>AI Agent Status</CardTitle>
              <CardDescription>State of active GenAI modules</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Truth-Engine Agent</span>
                  <Badge className="bg-green-500">IDLE</Badge>
                </div>
                <p className="text-xs text-muted-foreground italic">Last verified: 2m ago</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Linguistic Transformer</span>
                  <Badge className="bg-[#5E41A4]">ACTIVE</Badge>
                </div>
                <p className="text-xs text-muted-foreground italic">Translating English news to Bengali...</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">E-Paper Architect</span>
                  <Badge variant="outline">SCHEDULED</Badge>
                </div>
                <p className="text-xs text-muted-foreground italic">Next generation: Midnight (local time)</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Telegram Bot API</span>
                  <Badge className="bg-green-500">LISTENING</Badge>
                </div>
                <p className="text-xs text-muted-foreground italic">Webhook connected to @BanglarVoiceBot</p>
              </div>

              <div className="pt-4 border-t">
                <h4 className="text-sm font-bold mb-3 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" /> Quick Commands
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="text-xs">Publish E-Paper</Button>
                  <Button variant="outline" size="sm" className="text-xs">Flush Cache</Button>
                  <Button variant="outline" size="sm" className="text-xs">Export Logs</Button>
                  <Button variant="outline" size="sm" className="text-xs">Check DB</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}