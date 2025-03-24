import {defineConfig, presetUno, presetIcons, presetAttributify} from 'unocss'

export default defineConfig({
    presets: [
        presetUno(),
        presetIcons(),
        presetAttributify()
    ],
    theme: {
        colors: {
            'warm-beige': '#f0dfd2',
            'muted-sand': '#eac08d',
            'golden-tan': '#d39b6d',
            'soft-cream': '#fff6e8',
            'earthy-brown': '#704a3b',
            'deeper-brown': '#a0663f',
            'light-fleshy-pink': '#f8c7bd',
            'muted-blood-red': '#ec8989',
            'dusky-pink': '#eb90c9',
            'soft-gold': '#ffdba0',
            'lotus-border': '#8f7565',

            'darkreader-warm-beige': '#412916',
            'darkreader-muted-sand': '#6f4615',
            'darkreader-golden-tan': '#d49e72',
            'darkreader-soft-cream': '#412700',
            'darkreader-earthy-brown': '#c49e8f',
            'darkreader-deeper-brown': '#805232',
        }
    }
})
