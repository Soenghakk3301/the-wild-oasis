import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://undjohlfzyhlkiwbvanv.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVuZGpvaGxmenlobGtpd2J2YW52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ1OTYyMjAsImV4cCI6MjAxMDE3MjIyMH0.ILGdOc5ioOail-Q85EzVSlxxc5M0cQDFtYuDMDlUXXM'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
