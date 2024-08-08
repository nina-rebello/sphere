import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between">
    <nav className="absolute right-2 top-2">
    <ModeToggle />
    </nav>

    <aside className="h-screen hidden lg:block">
      <Image src="/login.png" alt="login" width={554} height={832}/>
    </aside>

    <section className="flex flex-col w-full items-center gap-7">
    <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="37.5" cy="37.5" r="37.5" fill="#E11D48"/>
    </svg>

    <h1 className="text-4xl font-extrabold uppercase">Sphere</h1>

    <Tabs defaultValue="entrar" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="entrar">Entrar</TabsTrigger>
        <TabsTrigger value="registrar">Registrar</TabsTrigger>
      </TabsList>
      <TabsContent value="entrar">

        <form action="" className="space-y-8 p-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email"/>
          </div>

          <div>
            <Label htmlFor="senha">Senha</Label>
            <Input type="password" id="senha"/>
          </div>

          <div className="flex justify-center">
            <Button type="submit">Entrar</Button>
          </div>
        </form>
      </TabsContent>

      <TabsContent value="registrar">
      <form action="" className="space-y-8 p-4">
          <div>
            <Label htmlFor="nome">Nome</Label>
            <Input id="nome"/>
          </div>

          <div>
            <Label htmlFor="bio">Bio</Label>
            <Input id="bio"/>
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email"/>
          </div>

          <div>
            <Label htmlFor="senha">Senha</Label>
            <Input type="password" id="senha"/>
          </div>

          <div className="flex justify-center">
            <Button type="submit">Criar conta</Button>
          </div>

        </form>
      </TabsContent>
    </Tabs>
  
    

    </section>


    </main>
  );
}
