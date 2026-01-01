import balconyImage from "@/assets/balcony-gourmet.jpg";

export const TransformationSection = () => {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl animate-slide-in-left">
            <img
              src={balconyImage}
              alt="Sacada gourmet com fechamento em vidro"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
          </div>

          {/* Content */}
          <div className="animate-slide-in-right">
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Valorize seu Imóvel{" "}
              <span className="text-primary">Instantaneamente</span>
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              O vidro não é apenas um detalhe, é o acabamento que define o luxo da
              sua casa. Trabalhamos com materiais de alta resistência e vedação
              perfeita para garantir conforto térmico e acústico.
            </p>
            <ul className="space-y-4">
              {[
                "Materiais de alta resistência e durabilidade",
                "Vedação perfeita contra intempéries",
                "Conforto térmico e acústico garantido",
                "Valorização imediata do imóvel",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    ✓
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
