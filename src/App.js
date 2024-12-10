import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Register from './components/Register';
import DoctorsAppointment from './components/DoctorsAppointment';
import Payment from './components/PaymentForms/Payment';

export default function App() {
  return (
    <div>
      {/* <Register /> */}
      {/* <DoctorsAppointment /> */}
      <Payment />
    </div>
  )
}