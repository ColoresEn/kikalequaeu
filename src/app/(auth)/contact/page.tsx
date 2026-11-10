"use client";

import { createContactAction } from "@/actions/contact-action";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ContactFormValues, contactFormSchema } from "@/schema";
import { Euro, MapPin, Phone, Mail } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const AddContactForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const defaultValues: Partial<ContactFormValues> = {
    postername: "",
    email: "",
    topic: "",
    message: ""
  };

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
    mode: "onChange"
  });

  const onSubmit = async ({
    postername,
    email,
    topic,
    message
  }: ContactFormValues) => {
    setLoading(true);
    await createContactAction({ postername, email, topic, message });
    setLoading(false);
    router.push("/");
      router.refresh();
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-10 max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Reserva y contacto</h1>
        <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
          Escríbenos para consultar disponibilidad, accesos o condiciones de plaza en el centro de Gandia.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="surface-panel border-border/80 bg-card/90">
          <CardHeader>
            <CardTitle>Deje su mensaje</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="postername"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre" autoComplete="name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="nombre@ejemplo.com" autoComplete="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="topic"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Teléfono</FormLabel>
                      <FormControl>
                        <Input placeholder="690 029 812" autoComplete="tel" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensaje</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Cuéntanos qué necesitas" className="min-h-28 resize-y" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full sm:w-auto" disabled={loading}>
                  {loading ? (
                    <>
                      <Spinner /> Guardando
                    </>
                  ) : (
                    "Enviar mensaje"
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <Card className="surface-panel border-border/80 bg-card/90">
          <CardHeader>
            <CardTitle>Información</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-sm">
            <div>
              <div className="mb-2 flex items-center gap-2 font-medium text-foreground">
                <MapPin className="size-4 text-primary" aria-hidden="true" />
                Accesos
              </div>
              <p className="text-muted-foreground">C/ Sant Francesc de Borja, 50 baix</p>
              <p className="text-muted-foreground">C/ Sant Rafael, 14</p>
              <p className="text-muted-foreground">46701 Gandia (Valencia)</p>
            </div>
            <div>
              <div className="mb-2 flex items-center gap-2 font-medium text-foreground">
                <Phone className="size-4 text-primary" aria-hidden="true" />
                Móvil
              </div>
              <p className="text-muted-foreground">690 029 812</p>
            </div>
            <div>
              <div className="mb-2 flex items-center gap-2 font-medium text-foreground">
                <Euro className="size-4 text-primary" aria-hidden="true" />
                Cuota mensual
              </div>
              <div className="space-y-1 text-muted-foreground">
                <p>Sótano: 60&euro; + IVA al 21%</p>
                <p>Superficie: 65&euro; + IVA al 21%</p>
              </div>
            </div>
            <div>
              <div className="mb-2 flex items-center gap-2 font-medium text-foreground">
                <Mail className="size-4 text-primary" aria-hidden="true" />
                Email
              </div>
              <p className="text-muted-foreground">parkingesoma@gmail.com</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddContactForm;
