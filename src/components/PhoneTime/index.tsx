import React, { useState, useEffect } from 'react';
import style from './index.module.scss';

const timeList = [
  { index: 0, checked: false, time: '09:00 - 09:30', hour: '09:00' },
  { index: 1, checked: false, time: '09:30 - 10:00', hour: '10' },
  { index: 2, checked: false, time: '10:00 - 10:30', hour: '' },
  { index: 3, checked: false, time: '10:30 - 11:00', hour: '11' },
  { index: 4, checked: false, time: '11:00 - 11:30', hour: '' },
  { index: 5, checked: false, time: '11:30 - 12:00', hour: '12' },
  { index: 6, checked: false, time: '12:00 - 12:30', hour: '' },
  { index: 7, checked: false, time: '12:30 - 13:00', hour: '13' },
  { index: 8, checked: false, time: '13:00 - 13:30', hour: '' },
  { index: 9, checked: false, time: '13:30 - 14:00', hour: '14' },
  { index: 10, checked: false, time: '14:00 - 14:30', hour: '' },
  { index: 11, checked: false, time: '14:30 - 15:00', hour: '15' },
  { index: 12, checked: false, time: '15:00 - 15:30', hour: '' },
  { index: 13, checked: false, time: '15:30 - 16:00', hour: '16' },
  { index: 14, checked: false, time: '16:00 - 16:30', hour: '' },
  { index: 15, checked: false, time: '16:30 - 17:00', hour: '17' },
  { index: 16, checked: false, time: '17:00 - 17:30', hour: '' },
  { index: 17, checked: false, time: '17:30 - 18:00', hour: '18' },
  { index: 18, checked: false, time: '18:00 - 18:30', hour: '' },
  { index: 19, checked: false, time: '18:30 - 19:00', hour: '19' },
  { index: 20, checked: false, time: '19:00 - 19:30', hour: '' },
  { index: 21, checked: false, time: '19:30 - 20:00', hour: '20:00' },
];

interface selectTimeRange {
  startTime?: string;
  endTime?: string;
}

const PhoneTime: React.FC<any> = (props) => {
  // let checkedRange = useRef([]);
  const { value, onChange } = props;
  const [data, setData] = useState(timeList);
  const [callDuration, setCallDuration] = useState<selectTimeRange[]>();

  // 获取标签数据
  const getTagList = (list: any[]) => {
    const timeArray: selectTimeRange[] = [];
    let time: selectTimeRange = {};
    const checkedList = list.filter((e) => e.checked);
    for (let i = 0; i < checkedList.length; i++) {
      if (!time.startTime) {
        time.startTime = checkedList[i].time?.slice(0, 5);
      }
      if (
        (checkedList[i + 1] &&
          checkedList[i + 1]?.index - checkedList[i]?.index !== 1) ||
        i === checkedList.length - 1
      ) {
        time.endTime = checkedList[i].time?.slice(8, 13);
        timeArray.push({ ...time });
        time = {};
      }
    }
    return timeArray;
  };

  // 点击
  const handleClick = (e: { index: number; checked: boolean }) => {
    const { index, checked } = e;
    const list = data.map((e) => {
      return {
        ...e,
        checked: e.index === index ? !checked : e.checked,
      };
    });
    setData(list);
    const tags = getTagList(list);
    setCallDuration(tags);
    const checkedList = [...list].filter((e) => e.checked);
    if (checkedList.length) {
      const startTime = checkedList[0] ? checkedList[0]?.time?.slice(0, 5) : '';
      const endTime = checkedList[checkedList.length - 1]
        ? checkedList[checkedList.length - 1]?.time?.slice(8, 13)
        : '';
      onChange({ timeRange: [startTime, endTime], callDuration: tags });
    } else {
      onChange(undefined);
    }
  };

  const getValue = () => {
    if (Array.isArray(value?.callDuration)) {
      const callDurationTemp = JSON.parse(JSON.stringify(value?.callDuration));
      callDurationTemp.forEach((item: { startTime: string | any[]; endTime: string | any[]; }) => {
        item.startTime = item.startTime.slice(0, 5);
        item.endTime = item.endTime.slice(0, 5);
      });
      setCallDuration(callDurationTemp);
      const timeData = JSON.parse(JSON.stringify(timeList));
      callDurationTemp.forEach((item: { startTime: any; endTime: any; }) => {
        const firstItem = timeData.find(
          (i: { time: string | any[]; }) => i.time?.slice(0, 5) === item.startTime,
        );
        if (firstItem) {
          const endItem =
            firstItem.time.slice(8, 13) === item.endTime
              ? firstItem
              : timeData.find((i: { time: string | any[]; }) => i.time?.slice(8, 13) === item.endTime);
          timeData.forEach((i: { index: number; checked: boolean; }) => {
            if (
              (firstItem?.index < i.index || firstItem?.index === i.index) &&
              (i.index < endItem?.index || i.index === endItem?.index)
            ) {
              i.checked = true;
            }
          });
        }
      });
      setData(timeData);
    }
  };

  useEffect(() => {
    getValue();
  }, [value]);

  return (
    <>
      <div className={style.timeSlider}>
        <div className={style.timeWrap}>
          {data.map((e) => {
            return (
              <i
                className={e.checked ? style.active : ''}
                style={{ fontSize: 8 }}
                key={e.index}
                onClick={() => handleClick(e)}
              >
                <span
                  className={style.timeName}
                  style={{
                    transform: e.index === 0 ? 'translateX(-70%)' : '',
                  }}
                >
                  {e.time === '09:00' || e.time === '20:00' ? e.time : e.hour}
                </span>
              </i>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PhoneTime;
