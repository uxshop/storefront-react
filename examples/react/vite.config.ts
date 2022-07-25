import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { doocaPlugin } from '@uxshop/storefront-core/dist/plugin/dc-vite'
import config from './dooca.config'

export default defineConfig({
    plugins: [doocaPlugin(config), react()]
})
