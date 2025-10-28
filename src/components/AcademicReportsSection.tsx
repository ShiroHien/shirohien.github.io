import { ExternalLink, Grip, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { academicReports } from "@/data/academicReports";
import { useMomentumScroll } from "@/hooks/use-momentum-scroll";

const AcademicReportsSection = () => {
  const {
    scrollRef: scrollContainerRef,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useMomentumScroll({
    damping: 0.95,
    velocityMultiplier: 20,
    minVelocity: 0.1,
  });

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      const newScrollPosition =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="academic-reports" className="py-14 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">Academic Reports</h2>
          <p className="text-muted-foreground max-w-2xl mb-8">
            Selected academic and research reports showcasing my technical writing and analytical capabilities.
          </p>
        </motion.div>

        <div className="flex justify-between mb-6 items-center">
          <div className="flex items-center text-muted-foreground">
            <Grip className="h-4 w-4 mr-2" />
            <span className="text-sm hidden md:inline">Drag to explore</span>
            <span className="text-sm md:hidden">Swipe to explore</span>
          </div>
          <div className="flex space-x-2">
            <Button
              onClick={() => scroll("left")}
              variant="outline"
              size="icon"
              className="rounded-full"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              onClick={() => scroll("right")}
              variant="outline"
              size="icon"
              className="rounded-full"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-6 space-x-6 scrollbar-hidden cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {academicReports.map((report, idx) => (
            <motion.div
              key={report.title}
              className="min-w-[320px] max-w-sm bg-card rounded-lg p-6 shadow-sm border border-border hover:border-primary/20 transition-colors"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 * idx }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 text-primary rounded-md">
                    <report.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold flex-1">{report.title}</h3>
                </div>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground mb-4">
                {report.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
              <a
                href={report.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
              >
                View Report
                <ExternalLink className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicReportsSection;