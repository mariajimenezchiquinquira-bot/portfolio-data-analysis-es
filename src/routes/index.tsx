import { createFileRoute } from "@tanstack/react-router";
import { FileText, Linkedin } from "lucide-react";
import {
  ActionLink,
  CardBlock,
  DocsLink,
  GithubLink,
  ProjectCard,
} from "@/components/portfolio/ProjectCard";
import { ProjectImageGrid } from "@/components/portfolio/ImagePlaceholder";
import segElbowMethod from "@/assets/projects/segmentation-5-elbow-method.png";
import segDominantCategory from "@/assets/projects/segmentation-4-dominant-category.png";
import segAvgTransaction from "@/assets/projects/segmentation-6-avg-transaction-by-cluster.png";
import segCardFranchise from "@/assets/projects/segmentation-card-franchise.png";
import segDomesticIntl from "@/assets/projects/segmentation-2-domestic-vs-international.png";
import segWeekdayHeatmap from "@/assets/projects/segmentation-weekday-heatmap.png";
import n8nFlow from "@/assets/projects/n8n-flow-diagram.png";
import n8nConfirmationMsg from "@/assets/projects/n8n-confirmation-message.png";
import sheetsResult from "@/assets/projects/n8n-sheets.png";
import churnDashboard from "@/assets/projects/churn-capital-loss-dashboard-v2.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "María José Jiménez — Portafolio de Análisis de Datos" },
      {
        name: "description",
        content:
          "Portafolio de María José Jiménez, estudiante de Ingeniería Industrial especializada en análisis de datos, analítica y automatización con IA para fintech y productos digitales.",
      },
      { property: "og:title", content: "María José Jiménez — Portafolio de Análisis de Datos" },
      {
        property: "og:description",
        content:
          "Proyectos basados en datos e IA en analítica, automatización y producto, con enfoque en fintech.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SKILLS = [
  "Análisis de Datos",
  "Business Intelligence",
  "Visualización de Datos",
  "Análisis de Negocio",
  "Análisis Financiero",
  "Automatización",
  "IA Generativa",
  "Mejora de Procesos",
  "Metodologías Ágiles (Scrum, Kanban)",
  "Python",
  "SQL",
  "Power BI",
  "Excel",
  "R",
  "Claude Code",
  "MCP",
  "Power Automate",
  "N8N",
  "Tableau",
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Portafolio
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl">
            María José Jiménez
          </h1>
          <p className="mt-3 text-base font-medium text-muted-foreground sm:text-lg">
            Estudiante de Ingeniería Industrial —{" "}
            <span className="text-primary">Énfasis en Análisis de Datos</span>
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/mariajosejimenez-ingenieraindustrial/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <section aria-labelledby="projects">
          <h2
            id="projects"
            className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            Proyectos
            <span className="mt-2 block h-1 w-14 rounded-full bg-primary" aria-hidden="true" />
          </h2>
          <div className="mt-8 grid gap-6">
            <ProjectCard
              title="Análisis de Fuga de Clientes y Pérdida de Capital"
              tech={["Power BI", "DAX", "Visualización de Datos"]}
              actions={
                <GithubLink href="https://github.com/mariajimenezchiquinquira-bot/PowerBi-Customer-Churn-Capital-Loss-Analysis" />
              }
            >
              <CardBlock label="Problema">
                Un banco enfrentaba fuga de clientes sin identificar sus principales causas ni
                su impacto financiero.
              </CardBlock>
              <CardBlock label="Enfoque">
                Realicé un análisis exploratorio en Power BI mediante visualizaciones y
                comparaciones para identificar patrones de fuga y segmentos de mayor riesgo.
              </CardBlock>
              <CardBlock label="Resultados">
                Identifiqué una pérdida de capital concentrada en clientes de alto saldo,
                generando un impacto financiero significativo. La inactividad emerge como la
                principal señal de alerta, especialmente en Alemania, donde se registra la mayor
                tasa de fuga.
              </CardBlock>
              <img
                src={churnDashboard}
                alt="Dashboard de Power BI: Análisis de Fuga de Clientes y Pérdida de Capital"
                loading="lazy"
                className="mx-auto w-full max-w-3xl rounded-md bg-white object-contain"
              />
            </ProjectCard>

            <ProjectCard
              title="Segmentación de Tarjetahabientes por Comportamiento de Gasto"
              tech={["Python", "SQL"]}
              actions={
                <ActionLink href="/ConsumoTarjetasCredito.html" variant="solid">
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  Notebook
                </ActionLink>
              }
            >
              <CardBlock label="Problema">
                Un banco colombiano contaba con datos de gasto de más de 47.000 tarjetahabientes,
                pero no tenía una segmentación basada en su comportamiento de uso, limitando el
                diseño de promociones dirigidas.
              </CardBlock>
              <CardBlock label="Enfoque">
                Apliqué clustering K-means para segmentar clientes según su comportamiento
                transaccional y utilicé el método del codo para determinar el número óptimo de
                clústeres. Luego, mediante SQL, analicé la frecuencia, el gasto promedio y la
                categoría dominante de cada clúster.
              </CardBlock>
              <CardBlock label="Resultado">
                Los tres clústeres se diferenciaron por frecuencia y valor de gasto: ocasionales
                de bajo gasto (42.7%), ocasionales de alto valor (33.1%, 9 veces mayor) y
                usuarios frecuentes (24.2%).
              </CardBlock>
              <ProjectImageGrid
                columns={3}
                images={[
                  { src: segElbowMethod, alt: "Método del codo para seleccionar el número de clústeres" },
                  { src: segDominantCategory, alt: "Categoría de gasto dominante por clúster" },
                  { src: segAvgTransaction, alt: "Monto promedio de transacción por clúster de clientes" },
                  { src: segCardFranchise, alt: "Franquicia de tarjeta más usada por clúster" },
                  { src: segDomesticIntl, alt: "Gasto nacional vs. internacional por clúster" },
                  { src: segWeekdayHeatmap, alt: "Gasto por día de la semana y clúster" },
                ]}
              />
            </ProjectCard>

            <ProjectCard
              title="Automatización de Contratos Vehiculares"
              tech={["n8n", "Google Gemini (IA)"]}
              actions={
                <DocsLink href="/docs/vehicle-contract-automation-technical-documentation.pdf" />
              }
            >
              <CardBlock label="Problema">
                El equipo de facturación de un concesionario extraía manualmente 8 campos de
                datos de contratos en PDF a una hoja de cálculo, un proceso lento y propenso a
                errores humanos.
              </CardBlock>
              <CardBlock label="Enfoque">
                Construí un flujo automatizado en n8n usando un bucle para procesar múltiples
                contratos. El flujo lee los PDFs desde Drive, envía el texto a Gemini AI mediante
                un nodo Information Extractor, actualiza Google Sheets y dispara una
                confirmación por Gmail.
              </CardBlock>
              <CardBlock label="Resultado">
                El flujo procesó los 15 contratos sin errores, agregando automáticamente datos
                estructurados y notificando al equipo. Esto eliminó el ingreso manual de datos,
                optimizó el procesamiento por lotes y mejoró la confiabilidad de la facturación.
              </CardBlock>
              <div className="flex flex-col gap-3">
                <a
                  href={n8nFlow}
                  target="_blank"
                  rel="noreferrer"
                  className="group block overflow-hidden rounded-md"
                >
                  <img
                    src={n8nFlow}
                    alt="Flujo de n8n para automatizar el procesamiento de contratos vehiculares"
                    loading="lazy"
                    className="aspect-video w-full bg-white object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </a>
                <div className="grid gap-3 sm:grid-cols-2">
                  <a
                    href={sheetsResult}
                    target="_blank"
                    rel="noreferrer"
                    className="group block overflow-hidden rounded-md"
                  >
                    <img
                      src={sheetsResult}
                      alt="Datos vehiculares extraídos y registrados en Google Sheets"
                      loading="lazy"
                      className="aspect-video w-full bg-white object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </a>
                  <a
                    href={n8nConfirmationMsg}
                    target="_blank"
                    rel="noreferrer"
                    className="group block overflow-hidden rounded-md"
                  >
                    <img
                      src={n8nConfirmationMsg}
                      alt="Mensaje de confirmación por Gmail tras el procesamiento exitoso"
                      loading="lazy"
                      className="aspect-video w-full bg-white object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </a>
                </div>
              </div>
            </ProjectCard>
          </div>
        </section>

        <section aria-labelledby="skills" className="relative mt-16 sm:mt-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-28 -top-24 h-80 w-80 rounded-full bg-primary/30 blur-[90px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/25 blur-[100px]"
          />
          <h2
            id="skills"
            className="relative text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            Skills
            <span className="mt-2 block h-1 w-14 rounded-full bg-primary" aria-hidden="true" />
          </h2>
          <ul className="relative mt-8 flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t border-border bg-secondary/50">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">© 2026 María José Jiménez</p>
          <div className="flex gap-5">
            <a
              href="https://www.linkedin.com/in/mariajosejimenez-ingenieraindustrial/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
