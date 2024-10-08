import { useState } from "react";
import CourseGoals from "./components/CourseGoals";
import CourseGoal from "./components/CourseGoal";
import CourseGoalChildren from './components/CourseGoalChildren';
import CourseGoalChildren2 from "./components/CourseGoalChildren2";
import CourseGoalChildren3 from "./components/CourseGoalChildren3";
import CourseGoalChildren4 from "./components/CourseGoalChildren4";

export default function App() {
  const [number, setNumber] = useState<number>(0);
  return (
		<>
			<main>
				<h1>Let's get started!</h1>
				<CourseGoals num={number} setNum={setNumber} />
			</main>
			;
			<main>
				<CourseGoal
					title={'Learn React + TS'}
					description={'Learn it from the ground up'}
				/>
			</main>
			<main>
				<CourseGoalChildren title='test'>
					Course Goals with children
				</CourseGoalChildren>
			</main>
			<main>
				<CourseGoalChildren2 title='test'>
					<p>Course Goals with children 2 FC </p>
				</CourseGoalChildren2>
			</main>
			<main>
				<CourseGoalChildren3 title='test'>
					Course Goals with children 3 PropsWithChildren
				</CourseGoalChildren3>
			</main>
			<main>
				<CourseGoalChildren4 title='test'>
					Course Goals with children 3 PropsWithChildren
				</CourseGoalChildren4>
			</main>
		</>
	)
}
