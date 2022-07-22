import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { doocaPlugin } from 'lw-storefront/lib/plugin/dc-vite'
import config from './dooca.config'

export default defineConfig({
  plugins: [doocaPlugin(config), react()]
})
