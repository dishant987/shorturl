import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Trash } from "lucide-react";
import { BeatLoader } from "react-spinners";


export function ConfirmDialog({
    open,
    onOpenChange,
    title = "Are you absolutely sure?",
    description = "This action cannot be undone.",
    confirmText = "Delete",
    cancelText = "Cancel",
    loading = false,
    onConfirm,
}) {
    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel disabled={loading}>
                        {cancelText}
                    </AlertDialogCancel>

                    <AlertDialogAction
                        onClick={onConfirm}
                        disabled={loading}
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90 flex items-center gap-2"
                    >
                        {loading ? (
                            <>
                                <BeatLoader size={5} color="white" />
                                <span>Deleting...</span>
                            </>
                        ) : (
                            <>
                                <Trash className="h-4 w-4" />
                                <span>{confirmText}</span>
                            </>
                        )}
                    </AlertDialogAction>

                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
