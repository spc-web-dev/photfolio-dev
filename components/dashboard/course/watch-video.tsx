import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

type Props = {
    children: React.ReactNode;
    url: string;
}

function WatchVideo({ children, url }: Props) {
  return (
    <Dialog>
        <DialogTrigger asChild>
            {children}
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Mikrotik Video</DialogTitle>
                <DialogDescription></DialogDescription>
            </DialogHeader>
            <div className="w-full">
                <video controls className="w-full h-full rounded-sm">
                    <source src={'/videos/video.mp4'} type="video/mp4"/>
                </video>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default WatchVideo