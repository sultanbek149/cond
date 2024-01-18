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
                // Add more entries for each HTML file.
            },
        },
    },
});