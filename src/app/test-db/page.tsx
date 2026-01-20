"use client";
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

export default function TestDB() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function test() {
      const supabase = createClient();
      try {
        const { data, error } = await supabase.from('_test_').select('*').limit(1);
        // We expect an error if the table doesn't exist, but it confirms connection
        if (error && error.message.includes('FetchError')) {
          setStatus('error');
          setError(error.message);
        } else {
          setStatus('success');
        }
      } catch (e: any) {
        setStatus('error');
        setError(e.message);
      }
    }
    test();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Database Connection Test</h1>
      <p>Status: {status}</p>
      {error && <p className="text-red-500 mt-2">Error: {error}</p>}
      <p className="mt-4 text-sm text-gray-500">URL: {process.env.NEXT_PUBLIC_SUPABASE_URL}</p>
    </div>
  );
}
