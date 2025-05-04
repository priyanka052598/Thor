"use client";

import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { age: 5, students: 18 },
  { age: 6, students: 23 },
  { age: 7, students: 15 },
  { age: 8, students: 27 },
  { age: 9, students: 20 },
  { age: 10, students: 23 },
  { age: 11, students: 30 },
  { age: 12, students: 21 },
  { age: 13, students: 27 },
  { age: 14, students: 15 },
  { age: 15, students: 10 },
  { age: 16, students: 26 },
  { age: 17, students: 22 },
];

export default function Chart() {
  return (
    <Card className="rounded-[24px] md:p-6 ">
      <CardContent>
        <h2 className="md:text-2xl text-[18px] font-semibold mb-6">Student’s Age Details</h2>
        <div className="w-full h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis className="mt-3" dataKey="age" label={{ value: "Student's Age", position: "insideBottom", offset: -3 }} />
              <YAxis label={{ value: "No. of Students", angle: -90, position: "insideLeft", offset: 2}} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#3f4254",
                  borderRadius: "8px",
                  color: "#fff",
                  border: "none",
                }}
                labelStyle={{ color: "#fff" }}
                formatter={(value) => [`${value} Students`, ""]}
              />
              <Bar dataKey="students" fill="#B4B6C5" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
