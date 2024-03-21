'use client';
import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config';
import { StudioLayout, StudioProvider } from 'sanity';
import AdminNavbar from '@/components/admin/Navbar';

const StudioPage = () => {
  return (
    
    <NextStudio config={config}>
      <StudioProvider config={config}>
        <StudioLayout />
      </StudioProvider>
    </NextStudio>
    
  )
}

export default StudioPage;