import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectCategory } from "../components/SelectCategory";
import { Textarea } from "@/components/ui/textarea";
import { TipTapEditor } from "../components/Editor";

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
                 </CardContent>
              </form>
          </Card>
      </section>                    
      );
      }