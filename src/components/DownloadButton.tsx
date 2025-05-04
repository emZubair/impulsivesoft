
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { downloadFullProject, downloadProjectAsHtml, downloadProjectCss, downloadProjectJs } from '@/lib/downloadUtils';

export function DownloadButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-brand-blue text-white hover:bg-brand-blue/90">
          <Download className="h-4 w-4" />
          <span>Download Code</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Download Project Files</DialogTitle>
          <DialogDescription>
            Choose which files to download from your ImpulsiveSoft project.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button 
            variant="outline" 
            className="w-full justify-start" 
            onClick={downloadProjectAsHtml}
          >
            <Download className="mr-2 h-4 w-4" />
            Download HTML (index.html)
          </Button>
          <Button 
            variant="outline" 
            className="w-full justify-start" 
            onClick={downloadProjectCss}
          >
            <Download className="mr-2 h-4 w-4" />
            Download CSS (styles.css)
          </Button>
          <Button 
            variant="outline" 
            className="w-full justify-start" 
            onClick={downloadProjectJs}
          >
            <Download className="mr-2 h-4 w-4" />
            Download JavaScript (script.js)
          </Button>
        </div>
        <DialogFooter>
          <Button 
            className="w-full bg-brand-blue text-white hover:bg-brand-blue/90" 
            onClick={downloadFullProject}
          >
            Download All Files
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
