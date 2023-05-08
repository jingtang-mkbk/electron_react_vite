/**
 * 根据最后一级级联id获取前面几级的id
 * data: tree型数据
 * treeId: tree中id的key值
 * id: 已知的最后一级id
 * otherTreeId: arr中的id
 */
export const getIdList = (
  data: any,
  treeId: string,
  id: string,
  otherTreeId: string = treeId,
) => {
  const arr: string[] = [];

  let brk: boolean = false;
  for (let i = 0; i < data.length; i++) {
    if (!brk) {
      for (let j = 0; j < data[i]?.children?.length; j++) {
        if (!brk) {
          for (let k = 0; k < data[i]?.children[j]?.children?.length; k++) {
            if (!brk) {
              if (data[i]?.children[j]?.children[k][treeId] === id) {
                arr.push(
                  data[i][otherTreeId],
                  data[i].children[j][otherTreeId],
                  data[i].children[j].children[k][otherTreeId],
                );
                brk = true;
              }
            } else break;
          }
        } else break;
      }
    } else break;
  }

  return arr;
};
