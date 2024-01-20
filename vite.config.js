import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                // main: 'main.js', // Specify your main JavaScript entry file.
                main: 'index.html',
                about: 'about.html',
                contacts: 'contacts.html',
                catalog: 'catalog.html',
                vent: 'vent.html',
                cold_panels: 'cold_panels.html',
                conditioner: 'conditioner.html',
                coolers: 'coolers.html',
                cond_industrial: 'cond_industrial.html',
                thermal_pump: 'thermal_pump.html',
                radiator: 'radiator.html',
                automation: 'automation.html',
                vent_units: 'vent_units.html',
                vento_expert: 'vent/VENTO EXPERT A100-1 S10 W V.2.html',
                alb: 'vent/Blauberg ALB.html',
                blb1: "vent/Blauberg Axis-F.html",
                blb2: "vent/Blauberg Axis-P.html",
                blb3: "vent/Blauberg Bavaria One.html",
                blb4: "vent/Blauberg BLAUBOX ME Pro.html", 
                blb5: "vent/Blauberg BLAUBOX MW Pro.html", 
                blb6: "vent/Blauberg Box-F.html",
                blb7: "vent/Blauberg Bravo Still.html",
                blb8: "vent/Blauberg Centro-M.html",
                blb9: "vent/Blauberg Iso-K.html",
                blb10: "vent/Blauberg Iso-Mix.html",
                blb11: "vent/Blauberg Iso-Mix-E.html", 
                blb12: "vent/Blauberg Iso-V.html",
                blb13: "vent/Blauberg KFK (прямоугольный).html", 
                blb14: "vent/Blauberg KOMFORT EC DBE.html", 
                blb15: "vent/Blauberg KOMFORT EC DBW.html", 
                blb16: "vent/Blauberg KWK (прямоугольный).html", 
                blb17: "vent/Blauberg Moon.html",
                blb18: "vent/Blauberg WKH (круглый).html", 
                blb19: "vent/Blauberg WKH (прямоугольный).html", 
                blb20: "vent/Blauberg ЕКН (круглый).html", 
                blb21: "vent/Blauberg ЕКН (прямоугольный).html", 
                blb22: "vent/Blauberg Altero 150.html"
                // Add more entries for each HTML file.
            },
        },
    },
});