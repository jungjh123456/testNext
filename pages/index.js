import Head from 'next/head'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { testGet } from '../redux/reducers/modules/count';
import { SlugWrap } from './style'

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(testGet());
  },[])
  return (
    <SlugWrap className="container">
     dsfds
    </SlugWrap>
  )
}
