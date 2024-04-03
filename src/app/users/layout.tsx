export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (      
          <div 
          className="bg-slate-600 py-10">
            {children}
        </div>                    
      
    );
  }
  