import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root=resolve(__dirname,"src");
const output=resolve(__dirname,"build");

// https://vitejs.dev/config/
export default defineConfig({
  root:root,  //Configure the root directory
  plugins: [react()],
  build:{
    outDir: output,  //Configure the output directory
    cssCodeSplit: true,  //Enable CSS Code-spliting
    emptyOutDir: true,  //If build folder not there, it will be created
    rollupOptions:{
      //Configuring end-points
      input:{
        main: resolve(root,"home","index.html"),
        home: resolve(root,"home","index.html"),
        time: resolve(root,"time","index.html"),
        about: resolve(root,"about","index.html")
      }
    }
  }
});