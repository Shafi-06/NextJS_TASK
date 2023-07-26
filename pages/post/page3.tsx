import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Page3() {
    const router = useRouter();
    const { number } = router.query;
  return (
    <>
      
       
       <h1>Number from URL: {number}</h1>
    </>
  );
}