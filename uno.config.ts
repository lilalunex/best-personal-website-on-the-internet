import {defineConfig, presetUno, presetIcons, presetAttributify} from 'unocss'

export default defineConfig({
    presets: [
        presetUno(),
        presetIcons(),
        presetAttributify()
    ],
    theme: {
        colors: {
            // First Colors
            'warm-beige': '#f0dfd2',
            'muted-sand': '#eac08d',
            'golden-tan': '#d39b6d',
            'soft-cream': '#d39b6d',
            'earthy-brown': '#704a3b',
            'deeper-brown': '#a0663f',
            'light-fleshy-pink': '#f8c7bd',
            'muted-blood-red': '#ec8989',
            'dusky-pink': '#eb90c9',
            'soft-gold': '#ffdba0',
            'lotus-border': '#8f7565',

            // Background Image Style
            'footer-link': '#000',
            'border-1': '#000',
            'button-hover-underline-1': '#000',
            'project-link': '#fff',
            'bg-button-1': '#f0dfd2',

            // Dark Mode
            'darkreader-warm-beige': '#412916',
            'darkreader-muted-sand': '#6f4615',
            'darkreader-golden-tan': '#d49e72',
            'darkreader-soft-cream': '#412700',
            'darkreader-earthy-brown': '#c49e8f',
            'darkreader-deeper-brown': '#805232',
        }
    }
})
