import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft, Link2Off } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="max-w-md w-full text-center shadow-xl">
        <CardContent className="p-10 space-y-6">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="rounded-full bg-muted p-6">
              <Link2Off className="h-14 w-14 text-destructive" />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-2">
            <h1 className="text-6xl font-extrabold tracking-tight">404</h1>
            <p className="text-xl font-semibold">Page Not Found</p>
            <p className="text-sm text-muted-foreground">
              Sorry, the page you’re looking for doesn’t exist or was moved.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="default"
              onClick={() => navigate("/")}
              className="gap-2"
            >
              <Home className="h-4 w-4" />
              Go Home
            </Button>

            <Button
              variant="outline"
              onClick={() => navigate(-1)}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
