// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://ofcqqgxbcgpkpciojtdn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9mY3FxZ3hiY2dwa3BjaW9qdGRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1MzU2NDUsImV4cCI6MjA2MjExMTY0NX0.6G8p5PWZyLGJKM-OiBXsG9UECuqC3Mbd511zB0-gJH0'
)