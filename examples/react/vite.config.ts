import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { shopPlugin } from '@uxshop/storefront-core/dist/plugin/shop-vite'
import config from './shop-config'

export default defineConfig({
    plugins: [shopPlugin(config), react()]
})
