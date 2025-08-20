import { AlertCircleIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const IsNotSupported = () => {
  return (
    <div className="grid w-full max-w-xl items-start gap-4 absolute">
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>Not Supported.</AlertTitle>
        <AlertDescription>
          <p>Speech recognition is not supported in your browser.</p>
        </AlertDescription>
      </Alert>
    </div>
  );
};
