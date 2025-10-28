import { motion } from "framer-motion";
import { extracurricularActivity } from "@/data/activity";
import LazyImage from "./LazyImage";

const ActivitySection = () => {
  return (
    <section id="activity" className="py-14 bg-background/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">Activity</h2>
          
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
              <h3 className="text-2xl font-bold">{extracurricularActivity.title}</h3>
              <span className="text-muted-foreground mt-2 sm:mt-0">
                {extracurricularActivity.period}
              </span>
            </div>
            
            <p className="text-muted-foreground max-w-2xl text-justify mb-4">
              {extracurricularActivity.description}
            </p>

            <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-8">
              {extracurricularActivity.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {extracurricularActivity.photos.map((photo, idx) => (
                <motion.div
                  key={idx}
                  className="aspect-video overflow-hidden rounded-lg border border-border relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 w-full h-full">
                    <LazyImage
                      src={photo}
                      alt={`${extracurricularActivity.title} - Photo ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ActivitySection;