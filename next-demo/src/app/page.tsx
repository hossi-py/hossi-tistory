import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Home() {
  return (
    <div className="min-h-[200vh] bg-red-100">
      <Dialog>
        <DialogTrigger>Dialog Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <br />
      sdlkfjsdlkfjsdlkfjsdlkfjsdlkfjsdflksdfjlksdjfsdlkfjsdlkfjsdlkfjsdlkfjsdlkfjsdflksdfjlksdjfsdlkfjsdlkfjsdlkfjsdlkfjsdlkfjsdflksdfjlksdjf
      sdlkfjsdlkfjsdlkfjsdlkfjsdlkfjsdflksdfjlksdjfsdlkfjsdlkfjsdlkfjsdlkfjsdlkfjsdflksdfjlksdjfsdlkfjsdlkfjsdlkfjsdlkfjsdlkfjsdflksdfjlksdjfsdlkfjsdlkfjsdlkfjsdlkfjsdlkfjsdflksdfjlksdjf123123131231241241247171892371298371983718937198
    </div>
  );
}
