import '../styles/sidebar.scss'
import { Button } from '../components/Button';
import { useState } from 'react';
interface GenreProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}
type SideBarProps = {
  genres: GenreProps[],
  selectedGenreId: number,
  handleClickButton(id: number): void
}

export function SideBar ( {genres, selectedGenreId,handleClickButton}: SideBarProps) {
  

  return(
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          id={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>

  </nav>

  
  )
}