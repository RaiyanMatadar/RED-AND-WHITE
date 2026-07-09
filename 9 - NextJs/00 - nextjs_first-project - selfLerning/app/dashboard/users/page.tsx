import Link from "next/link"

function page() {
  return (
    <ul>
        <li><Link href="/dashboard/users/1">users 1</Link></li>
        <li><Link href="/dashboard/users/2">users 2</Link></li>
        <li><Link href="/dashboard/users/3">users 3</Link></li>
        <li><Link href="/dashboard/users/4">users 4</Link></li>
    </ul>
  )
}

export default page