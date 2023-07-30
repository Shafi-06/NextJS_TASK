
import Link from 'next/link'
export default function Page1() { 
     
return( 
<> 
<h1>REGISTRATION PAGE</h1>

<h3>NAME</h3>
<h3>ID</h3>
<h3>DOB</h3>
<h2>
<Link href="/post/page1">Register</Link>
</h2>
<h2>
<Link href="/post/page3">Show Number in URL</Link>
</h2>
</>
);
}