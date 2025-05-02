import React from 'react'

function ProfileUi() {
  return (
    <div>     {/* Profile Image inside background */}
    <div
className="relative w-[260px] h-[272px] overflow-hidden"
style={{
borderTopLeftRadius: '258px',
borderBottomLeftRadius: '200px',
borderTopRightRadius: '206px',
borderBottomRightRadius: '220px',
boxShadow: '2px 12px 0px #B4B6C5', // Updated shadow color

}}
>
{/* Background color ya background image */}
<img
src="/duumy-profile-2.jpg"
alt="Profile"
className="w-full h-full object-cover"
style={{
borderTopLeftRadius: '258px',
borderBottomLeftRadius: '180px',
borderTopRightRadius: '206px',
borderBottomRightRadius: '149px',
}}
/>
</div></div>
  )
}

export default ProfileUi