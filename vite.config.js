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
                alb: 'vent/ALB.html',
                blb1: "vent/Axis-F.html",
                blb2: "vent/Axis-P.html",
                blb3: "vent/Bavaria One.html",
                blb4: "vent/BLAUBOX ME Pro.html",
                blb5: "vent/BLAUBOX MW Pro.html",
                blb6: "vent/Box-F.html",
                blb7: "vent/Bravo Still.html",
                blb8: "vent/Centro-M.html",
                blb9: "vent/Iso-K.html",
                blb10: "vent/Iso-Mix.html",
                blb11: "vent/Iso-Mix-E.html",
                blb12: "vent/Iso-V.html",
                blb13: "vent/KFK (прямоугольный).html",
                blb14: "vent/KOMFORT EC DBE.html",
                blb15: "vent/KOMFORT EC DBW.html",
                blb16: "vent/KWK (прямоугольный).html",
                blb17: "vent/Moon.html",
                blb18: "vent/WKH (круглый).html",
                blb19: "vent/WKH (прямоугольный).html",
                blb20: "vent/ЕКН (круглый).html",
                blb21: "vent/ЕКН (прямоугольный).html",
                blb22: "vent/Altero 150.html"
                // Add more entries for each HTML file.
            },
        },
    },
});