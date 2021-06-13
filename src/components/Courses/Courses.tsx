import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Row, Col, InputPicker, Panel } from "rsuite";
import {
  I_Component_Campus_Courses,
  I_Component_Courses,
} from "../../interfaces/components";
import { I_Global } from "../../interfaces/global";
import { I_Select_Input } from "../../interfaces/etc";
import { I_Main_Campus } from "../../interfaces/mainCampus";
import { I_Satellite_Campus } from "../../interfaces/satelliteCampus";
import { getMainCampus } from "../../actions/mainCampusActions";
import { getSatelliteCampus } from "../../actions/satelliteCampusActions";
import { getCampusCollege } from "../../actions/campusCollegeActions";
import { getCollegeCourses } from "../../actions/collegeCoursesActions";
import { getCollege } from "../../actions/collegeActions";
import { getCourse } from "../../actions/courseActions";
import chunk from "lodash/chunk";

const Courses = (props: I_Component_Courses) => {
  const {
    getMainCampus,
    getSatelliteCampus,
    isCampusCollegesLoading,
    getCampusCollege,
    isCollegeCoursesLoading,
    getCollegeCourses,
    isCollegesLoading,
    getCollege,
    isCoursesLoading,
    getCourse,
    isMainCampusLoading,
    isSatelliteCampusLoading,
    mainCampuses,
    satelliteCampuses,
    courses,
    colleges,
    campusColleges,
    collegeCourses,
  } = props;

  const [campusId, setCampusId] = useState("");
  const [remappedMainCampuses, setRemappedMainCampuses] = useState<I_Select_Input[]>([]);
  const [remappedSatteliteCampuses, setRemappedSatteliteCampuses] = useState<I_Select_Input[]>([]);
  const [campusCourses, setCampusCourses] = useState<I_Component_Campus_Courses[]>([]);

  useEffect(() => {
    getCampusCollege();
    getCollegeCourses();
    getMainCampus();
    getSatelliteCampus();
    getCollege();
    getCourse();
  }, []);

  useEffect(() => {
    if (mainCampuses.length > 0) {
      setRemappedMainCampuses(campusContent());
    }
    if (satelliteCampuses.length > 0) {
      setRemappedSatteliteCampuses(satteliteCampusContent());
    }
  }, [mainCampuses, satelliteCampuses]);

  useEffect(() => {
    if (collegeCourses.length > 0 && campusId) {
      const foundCollegeCourse = collegeCourses.filter((res1: any) => {
        const isCampusFound = res1.campusIds.find(
          (res2: any) => res2 === campusId
        );
        return isCampusFound ? res1 : undefined;
      });

      const remappedCourses = foundCollegeCourse.map((res1: any) => {
        const college = colleges.find(
          (res2: any) => res2._id === res1.collegeId
        );
        const course = courses.find((res3: any) => res3._id === res1.courseId);
        return {
          courseName: course?.courseName,
          courseCode: course?.courseCode,
          collegeName: college?.collegeName,
          collegeCode: college?.collegeCode,
        };
      });

      setCampusCourses(remappedCourses);
    }
  }, [campusId]);

  const campusContent = () => {
    return mainCampuses.map((res: I_Main_Campus) => {
      return {
        label: res.campusName,
        value: res._id,
        type: "Main",
      };
    });
  };

  const satteliteCampusContent = () => {
    return satelliteCampuses.map((res: I_Satellite_Campus) => {
      return {
        label: res.campusName,
        value: res._id,
        type: "Sattelite",
      };
    });
  };

  return (
    <div style={{ marginRight: "10px", marginLeft: "10px"}}>
      <Row gutter={16}>
        <Col style={{ marginTop: "5px" }}>
          <p>
            <strong>Choose Campus:</strong>
          </p>
          <InputPicker
            placeholder=""
            data={[...remappedMainCampuses, ...remappedSatteliteCampuses]}
            onChange={(e) => setCampusId(e)}
            groupBy="type"
            style={{ width: 224, marginTop: "5px" }}
          />
        </Col>
      </Row>
      {campusCourses && campusCourses.length > 0
        ? chunk(campusCourses, 4).map((res: any) => {
            const toRender = res.map((res2: any) => {
              return (
                <Col md={6} xs={24} style={{ marginTop: "5px" }}>
                  <Panel bordered header={res2.courseCode}>
                    <p>
                      <i style={{ color: "#39a7bf" }}>
                        <b>{res2.courseName}</b>
                      </i>{" "}
                      is under {res2.collegeName} ({res2.collegeCode})
                    </p>
                  </Panel>
                </Col>
              );
            });
            return <Row style={{ marginTop: "10px" }}>{toRender}</Row>;
          })
        : null}
    </div>
  );
};

const mapStateToProps = (global: I_Global) => ({
  mainCampuses: global.mainCampus.data,
  satelliteCampuses: global.satelliteCampus.data,
  isMainCampusLoading: global.mainCampus.isLoading,
  isSatelliteCampusLoading: global.satelliteCampus.isLoading,
  isCampusCollegesLoading: global.campusCollege.isLoading,
  campusColleges: global.campusCollege.data,
  isCollegeCoursesLoading: global.collegeCourse.isLoading,
  collegeCourses: global.collegeCourse.data,
  isCollegesLoading: global.college.isLoading,
  colleges: global.college.data,
  isCoursesLoading: global.course.isLoading,
  courses: global.course.data,
});

export default connect(mapStateToProps, {
  getMainCampus,
  getCampusCollege,
  getCollegeCourses,
  getSatelliteCampus,
  getCollege,
  getCourse,
})(Courses);
