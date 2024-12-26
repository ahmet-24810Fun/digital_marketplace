import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectCategory } from "../components/SelectCategory";
import { Textarea } from "@/components/ui/textarea";
import { TipTapEditor } from "../components/Editor";
import { UploadDropzone } from "../lib/uploadthing";



export default function SellRoute() {
  return (
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-14">
          <Card>
              <form>
                 <CardHeader>
                    <CardTitle>Sell yout product with ease</CardTitle>
                    <CardDescription>please describe your product detail here so that it can be sold</CardDescription>
                 </CardHeader>
                 <CardContent className="flex flex-col gap-y-10">
                   <div className="flex flex-col gap-y-2">  
                      <Label>Name</Label>
                      <Input type="text" placeholder="Enter your product name" />
                   </div>
                   <div className="flex flex-col gap-y-2">
                        <Label>Category</Label>
                       <SelectCategory></SelectCategory>
                   </div>
                   <div className="flex flex-col gap-y-2">
                        <Label>Price</Label>
                        <Input type="number" placeholder="29$" />
                   </div>
                   <div className="flex flex-col gap-y-2">
                        <Label>Small Summary</Label>
                        <Textarea placeholder="Please describe your product shortly right here..." />
                   </div>
                   <div className="flex flex-col gap-y-2">
                        <Label> Description</Label>
                        <TipTapEditor/>    
                   </div>
                   <div className="flex flex-col gap-y-2">
                         <Label>Product Images</Label>
                         <UploadDropzone endpoint="imageUploader" />
                   </div>
                   <div className="flex flex-col gap-y-2">
                         <Label>Product File</Label>
                         <UploadDropzone endpoint="productFileUpload" />
                   </div>
                 </CardContent>
                 <CardFooter className="mt-5">
                         <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
                 </CardFooter>
              </form>
          </Card>
      </section>                    
      );
      }