import React from 'react'
import {Box} from '@mui/material'
import Header from 'components/Header'
import BreakdownChart from 'components/BreakdownChart'


const Breakdown = () => {
  return (
    <Box m='1.5rem 2.5rem' >
    <Header title="BREAKDOWN" subtitle='Breakdown Chart'/>
    <BreakdownChart/>
    </Box>
  )
}

export default Breakdown