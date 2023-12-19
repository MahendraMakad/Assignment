import React, { useState } from 'react';

const BmiCalculator = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState(null);

    const calculateBmi = () => {
        if (height && weight) {
            const heightInMeters = height;
            const bmiValue = weight / (heightInMeters * heightInMeters);
            setBmi(bmiValue.toFixed(2));
        } else {
            setBmi(null);
        }
    };

    return (
        <div class="bmi">
            <h1>BMI Calculator</h1>
            <input type="number" placeholder='height(m)' value={height} onChange={(e) => setHeight(e.target.value)} />
            <br />
            <input type="number" placeholder='weight(kg)' value={weight} onChange={(e) => setWeight(e.target.value)} />
            <br />
            <button onClick={calculateBmi}>Calculate BMI</button>
            {bmi !== null && (
                <div>
                    <h2>Your BMI: {bmi}</h2>
                </div>
            )}
        </div>
    );
};

export default BmiCalculator;
